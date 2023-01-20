import React from 'react'

export default function Sidebar(props) {
  return (
    <>
    <div>Sidebar</div>

        <div>{props.message}</div>
        <div>{props.pet}</div>
        </>
  );
}
