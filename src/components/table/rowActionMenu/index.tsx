import React from "react";
import { Menu } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { remove } from "../../../reducer";

interface RowActionMenuProps {
  id: string;
}
const RowActionMenu: React.FC<RowActionMenuProps> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    dispatch(remove({ id: id }));
  };

  const handleDetails = () => {
    navigate(`/details/${id}`);
  };

  return (
    <Menu>
      <Menu.Target>
        <IconDotsVertical />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => handleEdit()}>Edit</Menu.Item>
        <Menu.Item onClick={() => handleDelete()}>Delete</Menu.Item>
        <Menu.Item onClick={() => handleDetails()}>Details</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default RowActionMenu;
