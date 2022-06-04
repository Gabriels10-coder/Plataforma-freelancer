import React from 'react';

export interface IEstruturaProps{
    active:boolean;
    children:React.ReactNode;
    onClicks: React.MouseEventHandler<HTMLAnchorElement>;
    onClicksButton: React.MouseEventHandler<HTMLButtonElement>;
}