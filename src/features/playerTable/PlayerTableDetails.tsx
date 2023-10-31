import { Player } from "../../types/Player"

interface Props {
  player: Player
}

export default function PlayerTableDetails({ player }: Props) {
  return (
    <tr className=" border-b border-black text-xs sm:text-sm  md:w-full md:text-base h-[60px] lg:text-lg">
      <td>{player.first_name}</td>
      <td>{player.last_name}</td>
      <td className="collapse sm:visible">{player.height_feet}</td>
      <td className="collapse sm:visible">{player.weight_pounds}</td>
      <td>{player.position}</td>
      <td>{player.team.full_name}</td>
    </tr>
  )
}
