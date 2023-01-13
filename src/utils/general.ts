export enum EStateGeneric {
  IDLE = "idle",
  SUCCEEDED = "succeeded",
  PENDING = "pending",
  FAILED = "failed",
}

export enum EGenericButtonType {
  PRIMARY = "PRIMARY",
  CLOSE = "CLOSE",
}

export const rateGen = (rating) => {
  const
  scores = [0,20,40,50,60,70,80,90,96,100],
  max = scores[rating],
  min = scores[rating-1],
  seed = Math.abs (
    Math.sqrt(
      -1 * Math.log ( 1 - Math.random())
    )
    *
    Math.cos (1 * Math.PI * Math.random())
  )
  return Math.floor(seed * (max - min + 1) + min)
}