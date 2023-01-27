interface CourseName {
  courseName: string
}

// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseDescription extends CoursePartBase {
  description: string;
}

interface CourseNormalPart extends CourseDescription {
  type: "normal";
}

interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CourseDescription {
  type: "submission";
  exerciseSubmissionLink: string;
}

interface Special extends CourseDescription {
  requirements: Array<string>,
  type: 'special'
}
type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | Special;

interface CoursePartTypes {
  parts: CoursePart[]
}

type TypeProps = {
  parts: CoursePart
}

export type {
  CourseName,
  TypeProps,
  CoursePart,
  CoursePartTypes,
  Special,
  CourseDescription,
  CourseNormalPart,
  CoursePartBase,
  CourseSubmissionPart
}