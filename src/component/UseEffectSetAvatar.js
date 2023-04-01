import React from "react";
import { useState, useEffect } from "react";

function UseEffectSetAvatar() {
  const [avartar, setAvartar] = useState();

  useEffect(() => {
    //function clearnUp
    return () => {
      avartar && URL.revokeObjectURL(avartar.preview);
    };
  }, [avartar]);

  const handlePreviewAvartar = (e) => {
    // gan object tu file duoc chon vao bien file
    const file = e.target.files[0];
    // them thuoc tinh preview vao object file de luu link tam thoi den file
    file.preview = URL.createObjectURL(file);
    setAvartar(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewAvartar} />
      {avartar && <img src={avartar.preview} alt="" width={500} />}
    </div>
  );
}

export default UseEffectSetAvatar;
