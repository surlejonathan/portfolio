import { Social } from '../typings';

export const fetchSocials = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    );
    const data = await res.json();
    const socials: Social[] = data.socials;
    console.log('SOCIAL FETCHED', socials);
    return socials;
  } catch (error) {
    console.log(error);
  }
};
