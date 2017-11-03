//picker
export const Picker = ({value, options, onChange}) => (
	<div>
		<select onChange={ e => onChange(e.target.value)} value={value}>
			{
				options && options.map( (op, index) => <option value={op} key={index}>{op}</option>)
			}
		</select>
	</div>
)

//list
export const Posts = ({posts}) => (
	<ul>
    {posts.map((post, i) =>
      <li key={i}>{post.title}</li>
    )}
  	</ul>
)
