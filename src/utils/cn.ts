/**
 * 배열 형태로 작성된 className을 공백으로 구분된 문자열로 변환하는 함수
 * @param classNames
 */
export const cn = (...classNames: (string | undefined | false | null)[]) => {
  return classNames.filter((v) => !!v).join(' ');
};
