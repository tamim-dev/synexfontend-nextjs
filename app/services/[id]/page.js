import Collaborate from "@/app/components/Collaborate";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import getServiceDetails from "@/lio/getServiceDetails";

export async function generateMetadata({ params }) {
    const { id } = params;
    const Service_data = await getServiceDetails(id);

    return {
        title: Service_data.title,
        description: Service_data.description,
    };
}

export default async function services({ params }) {
    const { id } = params;
    const Service_data = await getServiceDetails(id);

    return (
        <main>
            <section>
                <Breadcrumbs
                    title={`${Service_data.services_view.title}`}
                    stateoff={true}
                />
                <div className="container mx-auto px-2">
                    <div className=" text-white max-sm:text-center">
                        <h2 className="text-center font-semibold text-primary lg:text-5xl md:text-4xl text-3xl gap-x-3 mb-10">
                            {
                                Service_data.services_view.service_content[0]
                                    .sub_title
                            }
                        </h2>
                        <p className=" font-light text-center mb-20">
                            {
                                Service_data.services_view.service_content[0]
                                    .sub_description
                            }
                        </p>
                    </div>
                </div>
            </section>

            {Service_data.services_view.content.map((item, index) => (
                <section key={index} className="pb-20">
                    <div className="container mx-auto px-2 sm:flex justify-between text-white pb-20">
                        <div className="sm:w-[48%] max-sm:text-center relative">
                            <div className="sticky top-10">
                                <h2 className="font-bold xl:text-4xl lg:text-3xl text-2xl mb-5 text-primary">
                                    {item.content_title}
                                </h2>
                                <p className="font-light max-lg:text-sm">
                                    {item.content_description}
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-[48%] max-sm:text-center flex flex-col gap-y-7 xl:gap-y-10 ">
                            {item.content_item.map((sitem) => (
                                <div key={sitem.id} className="flex gap-x-4">
                                    <div className="self-start rounded max-sm:hidden bg-gradient bg-red-500 lg:p-5 sm:p-3"></div>
                                    <div>
                                        <h3 className="font-bold xl:text-4xl lg:text-3xl text-2xl mb-5 text-primary">
                                            {sitem.item_title}
                                        </h3>
                                        <p className="font-light max-lg:text-sm">
                                            {sitem.item_description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {index !==
                        Service_data.services_view.content.length - 1 && (
                        <div id="stickybg"></div>
                    )}
                </section>
            ))}

            <Collaborate />
        </main>
    );
}
