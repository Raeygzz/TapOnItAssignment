function isEmpty(val: string | any[] | null | undefined) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
}

export { isEmpty };
