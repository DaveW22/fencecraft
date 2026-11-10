export type CaseStudyBrief = {
  audience: 'garden' | 'park';
  title: string;
  service: string;
  slug: string;
  fields: string[];
};

/** Empty until the owner supplies approved project facts and photographs. */
export const approvedCaseStudies: CaseStudyBrief[] = [];

export const caseStudyFields = [
  'Approved project photograph(s) and permission to publish',
  'Town or area, with the level of location detail approved',
  'Customer brief and the problem the work needed to solve',
  'Work carried out, materials and any useful scope detail',
  'Relevant service link and approval for the final wording'
];
