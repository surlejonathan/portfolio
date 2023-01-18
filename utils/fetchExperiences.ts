import { Experience } from '../typings';

export const fetchExperiences = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
    );
    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    return experiences;
  } catch (error) {
    console.log(error);
  }
};
