export class ReviewWritableFailDto{
  constructor(
    public reason : "NOT_FOUND" | "ALREADY_WRITTEN" | "NOT_MATCHED",
    public canWrite = false,
  ){}
}