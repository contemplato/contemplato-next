import React from "react";
import { useRouter } from "next/router";
import myConsortium from "../../../components/common/Myconsortium/myConsortium";

const meuConsorcio = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <myConsortium id={id} />
    </div>
  );
};

export default meuConsorcio;
