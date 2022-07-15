import React from 'react';
import classnames from 'classnames';

import style from './Button.module.scss';

export enum ButtonThemes {
  //@ts-ignore
  TRANSPARENT_WHITE = style.transparentWhite,
  //@ts-ignore
  TRANSPARENT_BLACK = style.transparentBlack,
  //@ts-ignore
  BLACK = style.black,
  //@ts-ignore
  WHITE = style.white,
  //@ts-ignore
  DARK_GRAY = style.darkGray,
  //@ts-ignore
  LIGHT_GRAY = style.lightGray,
  //@ts-ignore
  SPACE_CADET = style.spaceCadet,
  //@ts-ignore
  LIGHT_GREEN = style.lightGreen,
  //@ts-ignore
  DARK_GREEN = style.darkGreen,
  //@ts-ignore
  SKY_BLUE = style.skyBlue,
  //@ts-ignore
  CYAN = style.cyan,
  //@ts-ignore
  BLUE = style.blue,
  //@ts-ignore
  PURPLE_NAVI = style.purpleNavi,
  //@ts-ignore
  CORN = style.corn,
  //@ts-ignore
  HONEY = style.honey,
  //@ts-ignore
  MANGO = style.mango,
  //@ts-ignore
  ROSE = style.rose,
  //@ts-ignore
  PINK = style.pink,
}

interface IButtonProps {
  value: string;
  theme?: ButtonThemes | string;
  withBorder?: boolean;
  onClick: () => void;
}

export function Button({
  value,
  theme,
  withBorder = false,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={classnames([
        style.button,
        !!withBorder && style.border,
        !!theme && theme,
      ])}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
