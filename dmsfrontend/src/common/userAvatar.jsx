import React, { Component } from "react";

const UserAvatar = (props) => {
  const { name } = props;

  const alphabetColors = {
    A: { bg: "#d63384", fc: "white" },
    B: { bg: "#198754", fc: "white" },
    C: { bg: "#05a3d5", fc: "white" },
    D: { bg: "#856262", fc: "white" },
    E: { bg: "#6f42c1", fc: "white" },
    F: { bg: "#ffc107", fc: "white" },
    G: { bg: "#0d6efd", fc: "white" },
    H: { bg: "#d63384", fc: "white" },
    I: { bg: "#198754", fc: "white" },
    J: { bg: "#05a3d5", fc: "white" },
    K: { bg: "#856262", fc: "white" },
    L: { bg: "#6f42c1", fc: "white" },
    M: { bg: "#ffc107", fc: "white" },
    N: { bg: "#0d6efd", fc: "white" },
    O: { bg: "#d63384", fc: "white" },
    P: { bg: "#198754", fc: "white" },
    Q: { bg: "#05a3d5", fc: "white" },
    R: { bg: "#856262", fc: "white" },
    S: { bg: "#6f42c1", fc: "white" },
    T: { bg: "#ffc107", fc: "white" },
    U: { bg: "#0d6efd", fc: "white" },
    V: { bg: "#d63384", fc: "white" },
    W: { bg: "#856262", fc: "white" },
    X: { bg: "#05a3d5", fc: "white" },
    Y: { bg: "#198754", fc: "white" },
    Z: { bg: "#6f42c1", fc: "white" },
  };

  const getNameInitials = (name) => {
    let initials = "NA";
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
      initials =
        nameSplit[0].substring(0, 1) +
        nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
      initials = nameSplit[0].substring(0, 1);
    }
    return initials.toUpperCase();
  };

  const getRandomColor = (letter) => {
    return alphabetColors[letter]
      ? alphabetColors[letter]
      : alphabetColors["A"];
  };

  const Initials = getNameInitials(name);
  const colour = getRandomColor(name ? name[0] : "N");

  return (
    <>
      <div
        className={`h-full w-full text-2xl font-bold pt-[7px]`}
        style={{ backgroundColor: colour.bg, color: colour.fc }}
      >
        {Initials}
      </div>
    </>
  );
};

export default UserAvatar;
