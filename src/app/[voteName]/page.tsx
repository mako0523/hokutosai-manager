import React from "react";
import { VoteTable } from "../../components/VoteTable";
import { HomeButton } from "../../components/HomeButton";
import { voteNames, VoteName, toJapaneseVoteName } from "../../utils/vote-name";

type VotePageProps = {
  params: {
    voteName: string;
  };
};

const votePage = (props: VotePageProps) => {
  const {
    params: { voteName },
  } = props;

  if (!voteNames.includes(voteName as VoteName)) {
    return <div>存在しないページです．</div>;
  }

  const japaneseVoteName = toJapaneseVoteName(voteName as VoteName);

  return (
    <>
      <h2>「{japaneseVoteName}」の投票数</h2>
      <VoteTable voteName={voteName} />
      <HomeButton />
    </>
  );
};

export default votePage;
