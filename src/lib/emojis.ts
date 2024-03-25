//emojis about learning

const emojis = [
  "📚",
  "📖",
  "💻",
  "🖥",
  "📓",
  "📝",
  "🧠",
  "🎓",
  "🤓",
  "🧐",
  "📒",
];

export const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};
