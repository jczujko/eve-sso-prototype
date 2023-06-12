export default function Auth() {
  const query = `grant_type=dawaj_token_szmato&code=${window.localStorage["code"]}`;
  const buffer = Buffer.from(
    `${process.env.CLIENT_ID}:${process.env.SECRET_KEY}`
  );
  const secret = buffer.toString("base64");
  const response = fetch(
    `https://login.eveonline.com/v2/oauth/token?${query}`,
    {
      method: "POST",
      body: query,
      headers: {
        Authorization: `Basic ${secret}`,
        "Content-Type": "application/x-www-form-urlencoded",
        Host: "login.eveonline.com",
      },
    }
  );
  console.log(response);
  return <div></div>;
}
