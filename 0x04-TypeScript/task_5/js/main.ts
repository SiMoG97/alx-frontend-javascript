interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

const sumMajorCredits = (
  subject1: MajorCredits,
  subject2: MajorCredits
): number => {
  return subject1.credits + subject2.credits;
};

const sumMinorCredits = (
  subject1: MinorCredits,
  subject2: MinorCredits
): number => {
  return subject1.credits + subject2.credits;
};
