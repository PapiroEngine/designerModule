import { Position, Handle } from 'react-flow-renderer';
import './EditorComponentsStyles/CustomNodeComponent.css';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

function CustomNodeComponent({ data }: any){
 
  return (
    <div className="customNodeContainer">
        <Handle type='target' id='a' position={Position.Left} style={{border: 0, background: 'rgba(0,0,0,0.0)', width: 10, height: 10, borderRadius: '50%' }} />
        <Handle type='source' id='b' position={Position.Right} style={{border: 0, background: 'rgba(0,0,0,0.0)', width: 10, height: 10, top: '40%', borderRadius: '50%' }} />
        <Handle type='source' id='c' position={Position.Right} style={{border: 0, background: 'rgba(0,0,0,0.0)', width: 10, height: 10, top: '60%', borderRadius: '50%' }} />
      <div>
        <label className="title">{data.title? data.title : 'Cartão sem nome'}</label>
        <ReactMarkdown plugins={[gfm]} children={data.history ? data.history : 'Descrição do cartão - clique em editar.'} />
      </div>
      <div className="edit_container">
        <div className="edit_button" onClick={data.onEditClick}>
          <span>editar</span>
        </div> 
      </div>
      
    </div>
  );
};

export default CustomNodeComponent;