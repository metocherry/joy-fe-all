/**
 * @template T 데이터 타입
 */
export interface ListBuilderProps<T, R extends string | number> {
  getId: (item: T) => R;
  /** 반복될 배열 데이터 */
  data: T[];
}

/**
 * 배열 데이터를 반복하며, 리액트 컴포넌트 목록을 반환합니다 
 */
export function ListBuilder<T, R extends string | number> ({ getId, data }: ListBuilderProps<T, R>) {
  return (
    <div>
      { data.map((item) => <div key={getId(item)}>{ item }</div>) }
    </div>
  );
}
