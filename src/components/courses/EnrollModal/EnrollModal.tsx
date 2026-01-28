import * as yup from "yup";
import styles from "./EnrollModal.module.css";
import { useModalStore } from "../../../store/useModalStore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { api } from "../../../api/api";

interface EnrollModalForm {
name: string;
phone: string;
comment?: string | null;
}

const schema: yup.ObjectSchema<EnrollModalForm> = yup
  .object({
    name: yup
      .string()
      .required("Імʼя є обовʼязковим")
      .min(2, "Імʼя повинно містити щонайменше 2 символи"),
    phone: yup
      .string()
      .required("Номер телефону є обовʼязковим")
      .matches(/^\+?\d{10,13}$/, "Невірний формат номера телефону"),
    comment: yup
      .string()
      .notRequired()
      .nullable()
      .max(200, "Коментар занадто довгий"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const EnrollModal = () => {
  const { isOpen, courseTitle, courseId, closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnrollModalForm>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: async (data: EnrollModalForm) => {
      const applicationData = {
        userName: data.name,
        phone: data.phone,
        comment: data.comment || undefined,
        courseId: courseId,
      };

      const response = await api.post('/applications', applicationData);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Заявка успішно відправлена!");
      reset();
      closeModal();
    },
    onError: () => {
      toast.error("Сталася помилка. Спробуйте ще раз.");
    },
  });

  if (!isOpen) return null;

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  return (
    <div className={styles.backdrop} onClick={() => !mutation.isPending && closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={closeModal}>&times;</button>
        <h3>Хочу дізнатися більше про курс {courseTitle}</h3>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label className={styles.field}>
            Імʼя
            <input
              {...register("name")}
              placeholder='Як до Вас звертатися?'
              className={errors.name ? styles.inputError : ""}
            />
            {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
          </label>

          <label className={styles.field}>
            Номер телефону
            <input 
              {...register("phone")} 
              placeholder="+380..." 
              className={errors.phone ? styles.inputError : ''}
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone.message}</span>}
          </label>

          <label className={styles.field}>
            Коментар (необов'язково)
            <textarea {...register("comment")} placeholder="Ваші запитання..." />
            {errors.comment && <span className={styles.errorText}>{errors.comment.message}</span>}
          </label>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={closeModal}
              disabled={mutation.isPending}
            >
              Скасувати
            </button>

            <button
              type="submit"
              className={styles.confirmBtn}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Відправка..." : "Підтвердити"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
