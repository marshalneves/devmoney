import Modal from "react-modal";
import * as S from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className='react-modal-close'>
        <img src={closeImg} alt="Close modal" />
      </button>

      <S.Container>
        <h2>New Transaction</h2>

        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Amount" />

        <S.TransactionTypeContainer>
            <button type="button">
                <img src={incomeImg} alt="" />
                <span>Income</span>
            </button>
            <button type="button">
                <img src={outcomeImg} alt="" />
                <span>Outcome</span>
            </button>

        </S.TransactionTypeContainer>

        <input type="text" placeholder="Category" />
        <button type="submit">Save</button>
      </S.Container>
    </Modal>
  );
}
