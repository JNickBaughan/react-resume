type skill = {
  deep: string;
  broad: string;
  awhile: string;
};

type portfolio = {
  title: string;
  blerb: string;
  link: string;
};

type Data = {
  header: {
    title: string;
    photoUrl: string;
  };
  bio: {
    intro: string;
    blurb: string;
  };
  sections: {
    skills: { software: skill; tools: skill; server: skill; languages: skill };
    portfolio: {
      parcelViewer: portfolio;
    };
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
  sections: {
    skills: {
      languages: { deep: "", broad: "", awhile: "" },
      software: { deep: "", broad: "", awhile: "" },
      server: { deep: "", broad: "", awhile: "" },
      tools: { deep: "", broad: "", awhile: "" },
    },
    portfolio: {
      parcelViewer: {
        title: "",
        blerb: "",
        link: "",
      },
    },
  },
};

export default data;
export { Data };
