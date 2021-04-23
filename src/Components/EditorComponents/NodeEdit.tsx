import { useEffect } from 'react';
import Modal from 'react-modal';
import Switch from "react-switch";
import Select from 'react-select';
import MDEditor from '@uiw/react-md-editor';

import './EditorComponentsStyles/NodeEditStyle.css';

export default function NodeEdit(props: any){

  const customStyles = {
      overlay: {
          zIndex: 1000,
          height: '100vh',
          backgroundColor: 'rgba(0, 2, 5, 0.8)'
      },
      content : {
        borderRadius: '5%',
        border: '0',
        overflowy: 'auto',
        maxHeight: '90vh',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.25)',
        paddingBottom: '20px',
        backgroundColor: '#262626',
        color: '#8b927d',
      }
    };

  useEffect(() => {
      Modal.setAppElement('#root');
  })

  return(
      <Modal
        isOpen={props.openModal}
        onRequestClose={props.closeModal}
        style={customStyles}
      >
        <form>
          <div className="form_row">
            <div className="form_group one">
              <MDEditor
                value=''
                onChange={props.onChangeDescription}
                style={{marginTop: '20px'}}
              />
              <label className="form_label alone">Descrição</label>
            </div>
          </div>
          <div className="form_row">
            <div className="form_group field">
              <input className="form_field" name="title" placeholder="Title" type="text" onChange={props.onChangeTitle}/>
              <label className="form_label" >Título</label>
            </div>
            <div className="form_group field">
              <input className="form_field" name="duracao" placeholder="Duração" type="number" onChange={props.onChangeDuration} />
              <label className="form_label">Duração</label>
            </div>
          </div>
          <div className="form_row">
            <div className="form_group field"> 
              <label className="form_label alone">Tags:</label>  
            </div>
            <div className="form_group field"> 
              <Select
                isMulti
                name="colors"
                options={props.tagOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div className="form_row">
            <div className="form_group field"> 
              <input className="form_field" name="Option" placeholder="Alternativa" type="text"/>
              <label className="form_label">Alternativa</label>
            </div>
            <div className="form_group field">
              <input className="form_field" name="Node" placeholder="Nó" type="text" onChange={props.onChangeNoLigacao} />
              <label className="form_label">Nó</label>
            </div>
          </div>
          <div className="form_row">
            <div className="form_group three_cols">
              <p>Node Color:</p>
              <input className="color_front" type="color" />
            </div>
            <div  className="form_group three_cols">
              <p>Text Color:</p>
              <input className="color_front" type="color" />
            </div>
            <div  className="form_group three_cols">
              <p>Background Color:</p>
              <input className="color_front" type="color" />
            </div>
          </div>
          <div className="form_row">
            <div  className="form_group three_cols">
              <p>Cartão de início</p>
              <Switch onChange={props.onChangeNodeStart} checked={props.checkedStart} />
            </div>
            <div  className="form_group three_cols">
              <p>Cartão final</p>
              <Switch onChange={props.onChangeNodeEnd} checked={props.checkedEnd} />
            </div>
            <div  className="form_group three_cols">
              <p>Imagem de fundo:</p>
              <input className="inpt_file" type="file" />
            </div>
          </div>
          <hr></hr>
          <div className="form_row right end">
            <span className="cancel" onClick={props.closeModal}>Cancelar</span> 
            <span className="button_style" onClick={props.onSaveChanges}>Salvar</span> 
          </div>
        </form>
      </Modal>
  );
}