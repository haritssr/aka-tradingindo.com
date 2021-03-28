import { useRouter } from "next/router";
import { EN, ID } from "../translation";

export default function Trans(props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ID" ? ID : EN;
  return (
    <div>
      <div className="inline-block">
        <button
          className={ya}
          onClick={() => {
            router.push("/about", "/", { locale: "EN" });
          }}
        >
          EN
        </button>
      </div>
      {`|`}
      <div className="inline-block">
        <button
          className={ya}
          onClick={() => router.push("/about", "/", { locale: "ID" })}
        >
          ID
        </button>
      </div>
    </div>
  );
}
