import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { btoa } from "buffer";

const scope =
  "esi-markets.structure_markets.v1 esi-industry.read_character_jobs.v1 esi-markets.read_character_orders.v1 esi-characters.read_blueprints.v1 esi-corporations.read_blueprints.v1 esi-industry.read_corporation_jobs.v1 esi-markets.read_corporation_orders.v1";
const authUrl = "https://login.eveonline.com/v2/oauth/authorize/";
const query = `?response_type=code&redirect_uri=${process.env.CALLBACK}&client_id=${process.env.CLIENT_ID}&scope=${scope}&state=${process.env.PASS}`;

function Home({ clientId, secretKey }) {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const query = `grant_type=authorization_code&code=${code}`;
      const buffer = Buffer.from(`${clientId}:${secretKey}`);
      const secret = buffer.toString("base64");
      fetch(`https://login.eveonline.com/v2/oauth/token`, {
        body: query,
        method: "POST",
        headers: {
          Authorization: `Basic ${secret}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Host: "login.eveonline.com",
        },
      }).then((res) => {
        console.log(res);
      });
    }
  }, [code]);

  return (
    <>
      <Head>
        <title>Eve sso prototype</title>
        <meta name="description" content="SSO prototype" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!code && (
        <a href={`${authUrl}${encodeURI(query)}`} rel="noopener noreferrer">
          <Image
            src={"/eve-sso-login-white-large.png"}
            alt={"Login with EVE"}
            width="275"
            height="45"
          />
        </a>
      )}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      clientId: process.env.CLIENT_ID,
      secretKey: process.env.SECRET_KEY,
    },
  };
}

export default Home;
