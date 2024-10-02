import { postSchedules } from '@/api/schedules/post-schedules'
import ScheduleForm from '@/components/common/ScheduleForm/ScheduleForm'
import { QUERY_KEYS } from '@/constants/api'
import { PostSchedulesReq, PostSchedulesRes } from '@/types/schedules'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

const DateCreate = () => {
  const mutation = useMutation<PostSchedulesRes, AxiosError, PostSchedulesReq>({
    mutationKey: [QUERY_KEYS.POST_SCHEDULES],
    mutationFn: postSchedules,
    // onSuccess: (res) => {
    //   console.log(res);
    // },
    onError: (err) => {
      console.error('err', err)
    },
  })

  const handleSubmit = (data: PostSchedulesReq) => {
    mutation.mutate(data, {
      onSuccess: (response) => {
        console.log('일정 생성 성공:', response)
      },
      onError: (error) => {
        console.error('일정 생성 실패:', error)
      },
    })
  }

  return (
    <>
      <ScheduleForm<PostSchedulesReq> onSubmit={handleSubmit} />
    </>
  )
}

export default DateCreate
