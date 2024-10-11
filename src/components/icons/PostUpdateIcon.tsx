import { cn } from '@/utils/cn'

const PostUpdateIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width="64px"
      height="42px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      className={cn(className)}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M20 12.711l1-1v8.007A1.282 1.282 0 0 1 19.719 21h-8.007l1-1h7.007a.281.281 0 0 0 .281-.281zM2 3.281v16.437A1.282 1.282 0 0 0 3.281 21H4.9l.428-1H3.281A.281.281 0 0 1 3 19.719V3.28A.281.281 0 0 1 3.281 3H19.72a.281.281 0 0 1 .281.281v1.12a1.913 1.913 0 0 1 1-.173v-.947A1.281 1.281 0 0 0 19.719 2H3.28A1.281 1.281 0 0 0 2 3.281zm18.15 2.21a.965.965 0 0 1 1.386.03l1.413 1.413a.965.965 0 0 1 .03 1.385L9.826 21.471 5.73 23.227a.371.371 0 0 1-.488-.487l1.756-4.097zM9.022 20.728l-1.28-1.28-.96 2.24zM20.093 9.79L18.68 8.376 8.382 18.674l1.413 1.414zm.462-3.29l-1.169 1.17L20.8 9.083l1.152-1.151a.42.42 0 0 0 .006-.587l-.804-.838a.42.42 0 0 0-.6-.007z"></path>
        <path fill="none" d="M0 0h24v24H0z"></path>
      </g>
    </svg>
  )
}

export default PostUpdateIcon
