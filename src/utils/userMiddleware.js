export default async function userMiddlerWare(req) {
  let srtCookie = ``;
  req.cookies.getAll().forEach((cookie) => {
    return (srtCookie += `${cookie?.name}=${cookie?.value}; `);
  });
  try {
    const { data } = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Cookie: srtCookie,
        },
      }
    ).then((res) => res.json());

    return data || {};
  } catch (error) {
    return {};
  }
}
