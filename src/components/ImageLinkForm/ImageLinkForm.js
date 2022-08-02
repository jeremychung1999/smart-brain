import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
	return (
		<div>
		 <p className='f3 pa2'>
		 	{'This Magic Brain will detect FACES in your pictures, pass an image URL below!'}
		 </p>
		 <div className='center '>
		 	<div className='center form pa4 br3 shadow-5'>
		 	<input 
		 	className= 'f4 pa2 w-70 center' 
		 	type='text' 
		 	onChange={onInputChange}/>
		 	<button 
		 	className= 'w-30 grow f5 link ph3 pv2 dib white bg-light-green' 
		 	onClick={onPictureSubmit}>Detect</button>
			</div>
		 </div>
		</div>
	);
}

export default ImageLinkForm;