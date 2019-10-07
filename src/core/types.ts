/**
 * 方块坐标类型，只读
 */
export interface Point{
	readonly x: number
	readonly y: number
}
/**
 * 形状，坐标表示
 */
export type Shape = Point[]