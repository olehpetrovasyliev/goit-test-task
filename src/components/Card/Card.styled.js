import { styled } from 'styled-components';

export const StyledCard = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const CardText = styled.h3`
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #ebd8ff;
  font-size: 20px;
`;
export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 100px;
  border-width: 2px;
  border-color: #ebd8ff;
`;
export const Line = styled.span`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  /* position: relative; */
  position: absolute;
`;

export const AvatarWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
    0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.06),
    0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
`;
export const Image = styled.img`
  width: 308px;
  height: 168px;
  margin-bottom: 88px;
`;
