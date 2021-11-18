import React, { useState, useEffect } from "react";
import authUser from "../services/authUser";
import './ModUser.css'

function ModUser() {
  const [content, setContent] = useState();

  useEffect(() => {
    authUser.getModerateBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const err = error.message;
      }
    );
  }, []);
  return (
    <div className="modUser">
      <header>
        <span>MODERATE</span>
        <br />
        <p>inc.com Want to Retain Information Better? Try This Popular, 70-Year-Old
        Note-Taking Method At a conference, in a conference room, or in a
        classroom, this method is proven and powerful.</p>
      </header>
    </div>
  );
}

export default ModUser;
