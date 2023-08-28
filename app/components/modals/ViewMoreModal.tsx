'use client';

import useViewMoreModal from "@/app/hooks/useViewMoreModal";
import Modal from "./Modal";

const ViewMoreModal = () => {
    const viewMoreModal = useViewMoreModal();

    const handleSubmit = () => {
        viewMoreModal.onClose();
    }
    
    const bodyContent = (
        <div className="flex flex-col gap-4 ">
            <header className='text-xl font-semibold'>
                {viewMoreModal.contentHeader}
            </header>

            <p className='pt-2'>
                {viewMoreModal.contentBody}
            </p>
        </div>
    );

    return (
        <Modal
			isOpen={viewMoreModal.isOpen}
			onClose={viewMoreModal.onClose}
			onSubmit={handleSubmit}
			title="View More"
			actionLabel="Close"
			body={bodyContent}
		/>
    )

}

export default ViewMoreModal;