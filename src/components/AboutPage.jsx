import React from 'react';
import styled from 'styled-components';

const TwoColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  flex: 1;
  margin-right: 20px;
  img {
    height: 99vh; 
  }
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 40px; /* Dodaj padding do tekstu */
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  margin-right: 40px;
`;

const AboutPage = ({ imagePath, children }) => (
  <>
    <TwoColumnWrapper>
      <LeftColumn>
        <img src={imagePath} alt="Zdjęcie"/>
      </LeftColumn>
      <RightColumn>
        {children}
      </RightColumn>
    </TwoColumnWrapper>
  </>
);

export default AboutPage;