import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

import { DirectoryCategory } from "../directory/directory.component";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: React.FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        {/* <img/> */}
        <h2>{title}</h2>
        <p>Comprar Agora</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
