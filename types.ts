export enum FortuneGrade {
  Supreme = "上上签",
  Excellent = "上签"
}

export interface Fortune {
  id: number;
  signName: string;
  grade: FortuneGrade;
  poem: string[]; // Array of 4 lines
  auspiciousWords: string;
}

export interface AnimationState {
  isShaking: boolean;
  hasFallen: boolean;
  showModal: boolean;
}