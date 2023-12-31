import React from "react";

type Contributor = {
  role: string;
  name: string;
};

type ContributorsProps = {
  contributors: Contributor[];
};

const Contributors = ({ contributors }: ContributorsProps) => {
  return (
    <div>
      {contributors.map((contributor, index) => (
        <div key={index}>
          <h2>{contributor.role}</h2>
          <h1>{contributor.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Contributors;
