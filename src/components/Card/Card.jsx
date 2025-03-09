import s from "./index.module.css";
import media from "../../assets/icons/media.svg";
import copy from "../../assets/icons/copy.svg";
import file from "../../assets/icons/file.svg";
import bin from "../../assets/icons/bin.svg";
import mobile from "../../assets/icons/mobile.svg";
import subscriber from "../../assets/icons/subscriber.svg";
import seaBelt from "../../assets/icons/seaBelt.svg";
import options from "../../assets/icons/options.svg";
import eye from "../../assets/icons/eye.svg";
import drop from "../../assets/icons/drop.svg";
import sleep from "../../assets/icons/sleep.svg";

export const Card = ({
  title,
  image,
  id,
  fileType,
  fileCount,
  addedDate,
  tags,
  properties,
  quantity,
}) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <img src={media} />
        <h2 className={s.cardTitle}>{title}</h2>
      </div>
      <img src={image} className={s.cardImage} />
      <div className={s.cardBody}>
        <p className={s.cardInfo}>
          <span className={s.cardLabel}>ID:</span>
          <p>
            {id}
            <img src={copy} />
          </p>
        </p>
        <p className={s.cardInfo}>
          <span className={s.cardLabel}>
            Тип файлов <img src={file} />
          </span>
          {fileType}
        </p>
        <p className={s.cardInfo}>
          <span className={s.cardLabel}>Кол-во файлов:</span> {fileCount}
        </p>
        <p className={s.cardInfo}>
          <span className={s.cardLabel}>Дата добавления:</span> {addedDate}
        </p>
        <p className={s.cardInfo}>
          <span className={s.cardLabel}>Теги:</span>
          <div className={s.cardBtn}>
            <div className={s.cardTags}>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={s.cardTag}
                  style={{ color: tag.color }}
                >
                  {tag.text}
                </span>
              ))}
              <img className={s.cardInfoImg} src={drop} />
            </div>
          </div>
        </p>
        <p className={s.cardInfo}>
          <span className={s.cardLabel}>Нейросети:</span>
          <div className={s.cardItems}>
            <img src={bin} />
            <img src={seaBelt} />
            <img src={mobile} />
            <img src={sleep} />
            <img src={bin} />
            <img src={seaBelt} />
          </div>
          <div className={s.cardBtn}>
            <img className={s.cardInfoImg} src={drop} />
          </div>
        </p>

        <div className={s.card__subscribers}>
          <span className={s.cardLabel}>Количество:</span>

          <img src={subscriber} />
          <p>{quantity}</p>
          <div className={s.card__eye}>
            <img src={eye} />
          </div>
        </div>

        <div className={s.cardManage}>
          <span className={s.cardLabel}>Управление:</span>
          <img src={options} />
        </div>
      </div>
    </div>
  );
};
