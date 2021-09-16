import styled from "styled-components";
import { Colors } from "shared/colors";
import Image from "next/image";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${Colors.background};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileContainer = styled.div`
  padding: 40px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
