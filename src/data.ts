type Data = {
  header: {
    title: string;
    photoUrl: string;
  };
  bio: {
    intro: string;
    blurb: string;
  };
};

const data: Data = {
  header: {
    title: "[ J. Nick Baughan ]",
    photoUrl: "/profileImageDeskTop.png",
  },
  bio: {
    intro: "Front end developer working with Costar Group in Richmond, Va",
    blurb: "Well versed in Javascript. Working with React daily",
  },
};

export default data;
export { Data };
