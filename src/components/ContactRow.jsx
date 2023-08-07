export default function ContactRow({ bubbles, pickedId }) {

  return (
    <tr
        onClick={() => {
            pickId(bubbles.id)
        }}
    >
        <td>{bubbles.name}</td>
        <td>{bubbles.email}</td>
        <td>{bubbles.phone}</td>
    </tr>
)
}