const progressImage = (progress) => {
  switch (progress) {
    case 100:
      return "/assets/done.png";
    case 0:
      return "/assets/pending.png";
    default:
      return "/assets/in-progress.png";
  }
};

export default progressImage;