import React, { FC, memo } from "react";
import { useTranslation } from "react-i18next";

const Text: FC<any> = ({ children, ...props }) => {
  const { className } = props;
  const { t } = useTranslation();

  return <span className={className}>{t(children)}</span>;
};

export default memo(Text);
