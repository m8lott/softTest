import s from "./index.module.css";
import { useState } from "react";
import Modal from "react-modal";
import media from "../../assets/icons/media.svg";
import file from "../../assets/icons/file.svg";
import film from "../../assets/icons/film.svg";

Modal.setAppElement("#root");

function CustomModal({ isOpen, onClose }) {
  const [fileName, setFileName] = useState("");
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
    >
      <div className={s.modalHeader}>
        <img src={media} alt="Media Icon" className={s.mediaIcon} />
        <h2 className={s.modalTitle}>Добавление медиа файлов</h2>
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
      </div>

      <div className={s.modalStep}>
        <span className={s.stepNumber}>1</span>
        <span className={s.stepText}>Файлы</span>
      </div>

      <div className={s.progressContainer}>
        <div className={s.progressBar}>
          <div className={s.progress} style={{ width: "100%" }}></div>
        </div>
        <div className={s.progressBar}>
          <div className={s.progress} style={{ width: "33%" }}></div>
        </div>
      </div>

      <div className={s.modalBody}>
        <div className={s.formGroup}>
          <label className={s.formLabel}>
            Перед загрузкой файлов ознакомьтесь с
            <a href="#" className={s.link}>
              Требованиями
            </a>
            к фото и видео
          </label>
        </div>

        <div className={s.formGroup}>
          <label className={s.formLabel}>Название файлов</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Введите название для этих файлов"
            className={s.inputField}
          />
        </div>

        <div className={s.formGroup}>
          <label className={s.formLabel}>Тип файлов</label>
          <div className={s.fileTypeButtons}>
            <button className={s.fileTypeButton}>
              <img src={file} />
              <p>Фото</p>
            </button>

            <button className={s.fileTypeButton}>
              <img src={file} />
              <p>Видео</p>
            </button>
          </div>
        </div>

        <div
          className={`${s.uploadArea} ${isDragging ? s.dragging : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className={s.uploadPlaceholder}>
            <img src={film} />
            <p className={s.uploadText}>
              Файлы <br /> или перетащите их в эту область
            </p>
            <input
              style={{ opacity: 0 }}
              type="file"
              multiple
              onChange={handleFileChange}
              className={s.fileInput}
            />
          </div>

          {files.length > 0 && (
            <div className={s.filesList}>
              <h3>Загруженные файлы:</h3>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className={s.modalFooter}>
        <button className={s.cancelButton} onClick={onClose}>
          Отменить
        </button>
        <button
          className={s.nextButton}
          onClick={() => alert("Следующий шаг")}
          disabled={files.length === 0}
        >
          Далее
        </button>
      </div>
    </Modal>
  );
}

export default CustomModal;
