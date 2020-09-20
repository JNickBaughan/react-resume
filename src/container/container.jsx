import React, { useRef } from "react";
import styled from "styled-components";

import Header from "../components/header";
import Bio from "../components/bio";
import Main from "../components/main";

import renderSections from "../helpers";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-areas:
    "header header header header header header"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main"
    "side main main main main main";
`;

const HeaderWrapper = styled.div`
  grid-area: header;
`;

const BioWrapper = styled.div`
  grid-area: side;
`;

const MainWrapper = styled.div`
  grid-area: main;
`;

export const Container = ({ appConfig }) => {
  const { header, bio, sections } = appConfig;

  const scrollRef = useRef(null);
  const scrollToRef = (ref) => {
    //scrollRef.current.scrollTo(0, ref.current.offsetTop);
    scrollRef.current.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  Object.keys(sections).forEach((section) => {
    sections[section][`ref`] = useRef(null);
    sections[section][`scrollToRef`] = () => {
      scrollToRef(sections[section][`ref`]);
    };
  });

  console.dir(sections);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Header
          photoUrl={header.photoUrl}
          title={header.title}
          sections={sections}
        />
      </HeaderWrapper>
      <BioWrapper>
        <Bio intro={bio.intro} blurb={bio.blurb} />
      </BioWrapper>
      <MainWrapper>
        <Main ref={scrollRef}>
          {renderSections(sections)}
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat. At vero eos et accusamus et iusto odio
          dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt
          mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta
          nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
          placeat facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. At vero eos et accusamus et
          iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia
          animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          eligendi optio cumque nihil impedit quo minus id quod maxime placeat
          facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. At vero eos et accusamus et
          iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia
          animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          eligendi optio cumque nihil impedit quo minus id quod maxime placeat
          facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. At vero eos et accusamus et
          iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia
          animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          eligendi optio cumque nihil impedit quo minus id quod maxime placeat
          facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. At vero eos et accusamus et
          iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores et quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa qui officia deserunt mollitia
          animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
          est et expedita distinctio. Nam libero tempore, cum soluta nobis est
          eligendi optio cumque nihil impedit quo minus id quod maxime placeat
          facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Temporibus autem quibusdam et aut officiis debitis aut
          rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </Main>
      </MainWrapper>
    </Wrapper>
  );
};

export default Container;
