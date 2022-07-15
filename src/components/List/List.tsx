import React from 'react'
import { Item } from './components/Item/Item';

function Component() {
  return (
    <div>Navigation</div>
  );
}

export const List = Object.assign(Component, {
  Item: Item,
})
