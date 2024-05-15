export const voteNames = [
  "stall",
  "exhibition",
  "voice",
  "cosplay",
  "muscle",
  "karaoke",
] as const;

export type VoteName = (typeof voteNames)[number];

export const isVoteName = (value: unknown): value is VoteName => {
  for (const voteName of voteNames) {
    if (value === voteName) {
      return true;
    }
  }
  return false;
};

export const toJapaneseVoteName = (voteName: VoteName): string => {
  switch (voteName) {
    case "stall":
      return "模擬店投票";
    case "exhibition":
      return "展示投票";
    case "voice":
      return "Nice voice コンテスト";
    case "cosplay":
      return "仮装コンテスト";
    case "muscle":
      return "キン肉マンコンテスト";
    case "karaoke":
      return "カラオケコンテスト";
  }
};
