import React from "react";
import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";
import { time } from "console";

type Props = {
  dateISO: string;
};

const ConvertDate = ({ dateISO }: Props) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日")}
    </time>
  );
};

export default ConvertDate;
